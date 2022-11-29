## Create a Leaderboard chain

After the extention of the checkers chain with a leaderboard module, the checkers game is able to keep track on the player stats and it can maintain(on request) a sorted leaderboard. In addition it can send player stats via IBC to another chain. 
You will now create a leaderboard chain which can receive those packages. Determine another folder for your leaderboard chain, and scaffold a chain via Ignite:

```bash
ignite scaffold chain leaderboard --no-module
```

and again you can include a leaderboard module with IBC enabled in it:

```bash
ignite scaffold module leaderboard --ibc
```

You need a structure to keep track on player information too:

```bash
$ ignite scaffold map playerInfo wonCount:uint lostCount:uint dateUpdated:string --module leaderboard --no-message
```

and of course a board structure:

```bash
$ ignite scaffold single board PlayerInfo:PlayerInfo --module leaderboard --no-message
```

In addition, you want to receive candidate packages:

```bash
ignite scaffold packet candidate PlayerInfo:PlayerInfo --module leaderboard --no-message
```

this time you use the `--no-message` flag because this chain is not going to send any player information to another chain.

Implement the logic for packet receivment in the `x/leaderboard/keeper/candidate.go`:

```golang
...
// OnRecvCandidatePacket processes packet reception
func (k Keeper) OnRecvCandidatePacket(ctx sdk.Context, packet channeltypes.Packet, data types.CandidatePacketData) (packetAck types.CandidatePacketAck, err error) {
    // validate packet data upon receiving
    if err := data.ValidateBasic(); err != nil {
        return packetAck, err
    }

    // TODO: packet reception logic

    allPlayerInfo := k.GetAllPlayerInfo(ctx)

    found_in_player_list:= false
    for i := range allPlayerInfo {
        if allPlayerInfo[i].Index == data.PlayerInfo.Index {
            allPlayerInfo[i] = *data.PlayerInfo;
            found_in_player_list = true
            break
        }
    }

    if !found_in_player_list {
        k.SetPlayerInfo(ctx, *data.PlayerInfo)
    }

    return packetAck, nil
}
...
```

in addition, add a basic validation into `x/leaderboard/types/packet_candidate.go`:

```golang
package types

import (
    "errors"
)

// ValidateBasic is used for validating the packet
func (p CandidatePacketData) ValidateBasic() error {

    // TODO: Validate the packet data

  // return error if player address is empty
  if p.PlayerInfo.Index == "" {
      return errors.New("Player address cannot be empty")
  }

    return nil
}
```

now your leaderboard chain can receive player information from chains with the leaderboard module!

You need to do some more work in order to update the board from those information. 
There are two places where you can call for an update on the board structure, in the `OnRecvCandidatePacket` so each player sending his information will pay the fee for sorting and clipping the leaderboard or you can again create a seperate transaction for anyone to sort and clip the leaderboard on the leaderboard chain like you did for the checkers chain. 

Here you will extend the `x/leaderboard/keeper/candidate.go` file in order to call for an update in the `OnRecvCandidatePacket`. First we need to create some helper functions in `x/leaderboard/keeper/board.go`, therefore you can use the same file as in the checkers extention:


```golang
...

    func ParseDateAddedAsTime(dateAdded string) (dateAddedParsed time.Time, err error) {
        dateAddedParsed, errDateAdded := time.Parse(types.TimeLayout, dateAdded)
        return dateAddedParsed, sdkerrors.Wrapf(errDateAdded, types.ErrInvalidDateAdded.Error(), dateAdded)
    }

    func SortPlayerInfo(playerInfoList []types.PlayerInfo) {
        sort.SliceStable(playerInfoList[:], func(i, j int) bool {
            if playerInfoList[i].WonCount > playerInfoList[j].WonCount {
                return true
            }
            if playerInfoList[i].WonCount < playerInfoList[j].WonCount {
                return false
            }
            firstPlayerTime, _ := ParseDateAddedAsTime(playerInfoList[i].DateUpdated)
            secondPlayerTime,_ := ParseDateAddedAsTime(playerInfoList[j].DateUpdated)

            return firstPlayerTime.After(secondPlayerTime)
        })
    }

    func (k Keeper) updateBoard(ctx sdk.Context, playerInfoList []types.PlayerInfo) {
        SortPlayerInfo(playerInfoList)

        if types.LeaderboardWinnerLength < uint64(len(playerInfoList)) {
            playerInfoList = playerInfoList[:types.LeaderboardWinnerLength]
        }

        k.SetBoard(ctx, types.Board {
            PlayerInfo: playerInfoList,
        })
    }
```

and again you need to include into `x/leaderboard/types/errors.go`:

```golang
    ErrInvalidDateAdded     = sdkerrors.Register(ModuleName, 1120, "dateAdded cannot be parsed: %s")
```

Then you can include a `updateBoard` call into `x/leaderboard/keeper/candidate.go`:

```golang
...
// OnRecvCandidatePacket processes packet reception
func (k Keeper) OnRecvCandidatePacket(ctx sdk.Context, packet channeltypes.Packet, data types.CandidatePacketData) (packetAck types.CandidatePacketAck, err error) {
    // validate packet data upon receiving
    if err := data.ValidateBasic(); err != nil {
        return packetAck, err
    }

    // TODO: packet reception logic

    allPlayerInfo := k.GetAllPlayerInfo(ctx)

    found_in_player_list:= false
    for i := range allPlayerInfo {
        if allPlayerInfo[i].Index == data.PlayerInfo.Index {
            allPlayerInfo[i] = *data.PlayerInfo;
            found_in_player_list = true
            break
        }
    }

    if !found_in_player_list {
        k.SetPlayerInfo(ctx, *data.PlayerInfo)
    }

    // Here we can fetch the PlayerInfo and update the board
    playerInfoList := k.GetAllPlayerInfo(ctx)
    k.updateBoard(ctx, playerInfoList)

    return packetAck, nil
}
...
```


## Test it

You can find the sample implementation of the checkers chain extention and the leaderboard chain on a [repository we provide](https://github.com/b9lab/cosmos-ibc-docker/tree/ao-modular/modular). There you will also find a docker network and the relayer settings for an easy test. In addition it includes a script to create and run games. Follow the steps described on the repository to run a few tests and to see it in action.