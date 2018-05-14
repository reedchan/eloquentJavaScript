let size = 8;
let toggle = true;
let board = "";
for (let row = 0; row < size; row++)
{
    for (let col = 0; col < size; col++)
    {
        let everyOther = (col % 2 == 0);
        if (everyOther == toggle)
        {
            board += " ";
        }
        else
        {
            board += "#";
        }
    }
    board += "\n";
    toggle = !toggle;
}

console.log(board);
