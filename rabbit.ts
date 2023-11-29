function bunnyroad(instructions: string[]) {
    let i: number;
    let x: number = 0;
    let y: number = 0;
    for (i = 0 ; i < instructions.length; i +=1) {
        if (instructions[i] === 'droite') {
            x += 1;
        } else if (instructions[i] === 'gauche') {
            x -= 1;
        } else if (instructions[i] === 'nord') {
            y += 1;
        } else if (instructions[i] === 'sud') {
            y -= 1;
        } else {
            console.log(`L'instruction saisie en ${i+1}em position n'est pas correcte. Merci de renommer ${instructions[i]}`);
            return;
            
        }
    }
    console.log(`Le lapin est à la position (${x}, ${y})`);
}

bunnyroad(['droite', 'droite', 'droite', 'nord', 'foo']);