import * as readline from 'readline';

function getUserInput(prompt: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

async function arrangeNumbers() {
  const input = await getUserInput('Enter a list of numbers (comma-separated): ');
  const numbers = input.split(',').map((numStr) => parseFloat(numStr.trim()));

  const sortedNumbers = numbers.sort((a, b) => a - b);
  console.log('Sorted numbers:', sortedNumbers);
}

arrangeNumbers();