function my_robot_simulator( instructions ){
    var position = { x: 0, y: 0, bearing: 'north' };

for( i = 0; i < instructions.length; i++ ){

    if( instructions[i] == 'A' ){

        switch( position.bearing ){
            case 'north':
                position.y--;
                break;
            case 'south':
                position.y++;
                break;
            case 'east':
                position.x++;
                break;
            case 'west':
                position.x--;
                break;            
        }
} else if( instructions[i] == 'R' || instructions[i] == 'L' ){
         switch( position.bearing ){
            case 'north':
               // if( instructions[i] == 'R' ){
               //     position.bearing = 'east'
               // } else {
               //     position.bearing = 'west'
               // }  
                position.bearing = ( instructions[i] == 'R' ) ? 'east' : 'west';
                break;
            case 'south':
                position.bearing = ( instructions[i] == 'R' ) ? 'west' : 'east';


                break;
            case 'east':
                position.bearing = ( instructions[i] == 'R' ) ? 'south' : 'north';

                break;
            case 'west':
                position.bearing = ( instructions[i] == 'R' ) ? 'north' : 'south';

                break;            
        }
    }
}

return `{x: ${position.x}, y: ${position.y}, bearing: '${position.bearing}'}`;

}

// console.log(my_robot_simulator("RAALALL"));
// console.log(my_robot_simulator("AAAA"));
// console.log(my_robot_simulator("RAARA"));
// console.log(my_robot_simulator(""));