/*

A robot on an infinite XY-plane starts at point (0, 0) and faces north. The robot can receive one of three possible types of commands:

-2: turn left 90 degrees,
-1: turn right 90 degrees, or
1 <= k <= 9: move forward k units.
Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi).

If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest of the route.)

Return the maximum Euclidean distance that the robot will be from the origin squared (i.e. if the distance is 5, return 25).

Note:

North means +Y direction.
East means +X direction.
South means -Y direction.
West means -X direction.

Input: commands = [4,-1,3], obstacles = []
Output: 25
Explanation: The robot starts at (0, 0):
1. Move north 4 units to (0, 4).
2. Turn right.
3. Move east 3 units to (3, 4).
The furthest point away from the origin is (3, 4), which is 3^2 + 4^2 = 25 units away.

Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
Output: 65
Explanation: The robot starts at (0, 0):
1. Move north 4 units to (0, 4).
2. Turn right.
3. Move east 1 unit and get blocked by the obstacle at (2, 4), robot is at (1, 4).
4. Turn left.
5. Move north 4 units to (1, 8).
The furthest point away from the origin is (1, 8), which is 1^2 + 8^2 = 65 units away.

*/

const robotSim = (commands, obstacles) => {
  if (!commands || !obstacles) {
    return null;
  }
  
  /*
  -2: turn left 90 degrees,
  -1: turn right 90 degrees, or
  1 <= k <= 9: move forward k units.
  Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi).
  */
                      // N     E    S      W
  const directions = [[0,1],[1,0],[0,-1],[-1,0]];
  
  const currentSpot = [0,0]; // where the robot is
  let currDirectionIdx = 0;
  let currentDirection = directions[currDirectionIdx]; // facing north
   
   // [4,-1,4,-2,4]
  for (const command of commands) {
    if (command === -1) { // turn right 90 degrees
      currDirectionIdx = currDirectionIdx + 1 === directions.length ? 0 : currDirectionIdx + 1;
      currentDirection = directions[currDirectionIdx];
    } else if (command === -2) { // turn left 90 degrees
      currDirectionIdx = currDirectionIdx - 1 < 0 ? directions.length - 1 : currDirectionIdx - 1;
      currentDirection = directions[currDirectionIdx];
    } else { // moving
      let steps = command;
      let hitObstacle = false;
      while (steps && !hitObstacle) {
        // moves one step at a time
        steps--;
        currentSpot[0] += currentDirection[0];
        currentSpot[1] += currentDirection[1];
        for (const obstacle of obstacles) {
          // check if currentSpot is at an obstacle 
          if (currentSpot[0] === obstacle[0] && currentSpot[1] === obstacle[1]) {
            hitObstacle = true;
            currentSpot[0] -= currentDirection[0];
            currentSpot[1] -= currentDirection[1];
            break;
          }
        }
      }
    }
  }
  
  return currentSpot[0] * currentSpot[0] + currentSpot[1] * currentSpot[1];
  
}






























