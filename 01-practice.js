/*
    Function Parameters


    Sometimes it’s very useful to set reminder to help you accomplish all of your tasks.
    The program you are given takes an event as input.
    Complete the function-reminder to take that event as argument and output the corresponding message.

    Sample Input
    workout

    Sample Output
    You set a reminder about workout
*/

function main() {
    var eventExample = readLine();
    // function call
    setReminder(eventExample)
}
//complete the function
function setReminder(event) {
    console.log('You set a reminder about ' + event)
};

setReminder(workout);