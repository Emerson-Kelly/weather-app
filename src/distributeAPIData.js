export function filterAPIData(data) {
    try {
        if (data) {
            console.log('Data is being passed through');
        } else {
            console.log('Data is NOT being passed through');
        }
    } catch (error) {
        console.log('Data Parameter is NOT being received');
    }
}

class distributeAPIData {
    constructor(datetime, name, temp, tempmin, tempmax, conditions, icon) {
        this.datetime = datetime;
        this.name = name;
        this.temp = temp;
        this.tempmin = tempmin;
        this.tempmax = tempmax;
        this.conditions = conditions;
        this.icon = icon;
    }
}