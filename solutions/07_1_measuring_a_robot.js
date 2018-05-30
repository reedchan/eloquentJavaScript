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

compareRobots(routeRobot, [], goalOrientedRobot, []);
