const currentDate = new Date();
currentDate.setFullYear(2022);
document.getElementById("currentDay").innerHTML = currentDate;
console.log(currentDate);

var time = currentDate.getHours()
console.log(time)
var timeSlot = ["#description-1", "#description-2", "#description-3", "#description-4", "#description-5", "#description-6", "#description-7", "#description-8", "#description-9"];
var timeSlotIndex = 0;

class TimeblockObj {
    constructor(hour, todo) {
      this.hour = hour;
      this.todo = todo;
    }
  }

  

function getTextAreaBackgroundClass(hour, currentHour) {
    return hour < currentHour ? 'past' 
      : hour === currentHour ? 'present' 
      : 'future';
  }

