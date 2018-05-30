// Your code here
function yourRobot({place, parcels}, route)
{
    // Only re-route after pick-up/delivery
    if (route.length == 0) {
        // Determine the route to the closest parcel
        for (let parcel of parcels)
        {
            let tempPlace = undefined;
            if (parcel.place != place)
            {
                tempPlace = parcel.place;
            }
            else
            {
                tempPlace = parcel.address;
            }
            // Find the shortest route to pick-up/deliver the parcel
            let tempRoute = findRoute(roadGraph, place, tempPlace);
            // Check if it's the closest parcel (compare route lengths)
            // Just set a route if there's no pre-existing route
            if ((route.length == 0) || (tempRoute.length < route.length))
            {
                route = tempRoute;
            }
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

// Functions compareRobots and runCompareRobot taken from exercise 07_1
function compareRobots(robot1, memory1, robot2, memory2)
{
    // Your code here
    const numTasks = 100;
    let turns1 = 0;
    let turns2 = 0;
    let avg1 = 0;
    let avg2 = 0;
    for (let count = 0; count < numTasks; count++)
    {
        let state = VillageState.random();
        turns1 += runCompareRobot(state, robot1, memory1);
        turns2 += runCompareRobot(state, robot2, memory2);
    }
    avg1 = turns1 / numTasks;
    avg2 = turns2 / numTasks;
    console.log(`Robot1 averaged ${avg1} turns`);
    console.log(`Robot2 averaged ${avg2} turns`);
}

// Modified runRobot to return the number of turns instead of logging them
function runCompareRobot(state, robot, memory)
{
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0)
        {
            //console.log(`Done in ${turn} turns`);
            //break;
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        //console.log(`Moved to ${action.direction}`);
    }
}

runRobotAnimation(VillageState.random(), yourRobot, memory);
compareRobots(goalOrientedRobot, [], yourRobot, []);
