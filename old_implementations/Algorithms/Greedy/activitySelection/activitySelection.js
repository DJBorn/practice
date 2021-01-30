// Get maximum number of activities attendable
// O(n) time
// O(1) space

function activitySelection(activities) {
    activities.sort(function(activity1, activity2){
       return activity1.f - activity2.f;
    });
    var output = [activities[0]];
    var lastActivity = activities[0];
    for(let i = 1; i < activities.length; i++){
        if(activities[i].s >= lastActivity.f) {
            lastActivity = activities[i];
            output.push(lastActivity);
        }
    }
    return output;
}


console.log(activitySelection(
    [
        {a: 1, s: 1, f: 2},
        {a: 2, s: 3, f: 4},
        {a: 3, s: 0, f: 6},
        {a: 4, s: 5, f: 7},
        {a: 5, s: 8, f: 9},
        {a: 6, s: 5, f: 9},
    ]
));

console.log(activitySelection(
    [
        {a: 1, s: 75250, f: 112960 },
        {a: 2, s: 50074 , f: 114515 },
        {a: 3, s: 43659 , f: 81825 },
        {a: 4, s: 8931 , f: 93424 },
        {a: 5, s: 11273 , f: 54316 },
        {a: 6, s: 27545 , f: 35533 },
        {a: 7, s: 50879 , f: 73383 },
        {a: 8, s: 77924 , f: 160252 },
    ]
));