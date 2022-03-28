

const start = 8;
hour = moment().format("HH")
console.log(hour)
startTime = moment().startOf("day").add(start, "hour");
console.log(startTime)
// console.log(current)

{ 
  var today = moment().format("llll");
  console.log(today)
  $('#currentDay').append(today);
}





function getTimeSlots () { 

  for(let i = 8; i < 18; i++ ) {
    const setTimeSlots = startTime.add(1, "hour").format("LT")
    console.log(setTimeSlots)

    var slotStyle;

    // if (hour == i) {
    //   // current - red
    //   $('.inputBox').style.background = '#ff6961';
    // } else if (hour > i) {

    //   // future - green
    //   $('.inputBox').style.background = '#77dd77';
    // }  else if (hour < i) {
    //   $('.inputBox').style.background = '#000000';
    // }
    
    if (hour == i) {
      slotStyle = 'present';
    } else if (hour > i) {
      slotStyle = 'future';
    } else if (hour < i) {
      slotStyle = 'past';
      $('inputBox').readOnly = true
    }




    
      const timeSlotEl = 
      `<div class="time-slot" id='hour-${i}'>
        <div class="time">${setTimeSlots}</div>
        <textarea class="inputBox ${slotStyle} hour-${i}" id='input'></textarea>
        <div class="save saveBtn" ><i class="fas fa-save"></i></div>
      </div>`;

        $('.planner-container').append(timeSlotEl)

    }

    $(".saveBtn").on('click', () => {

      const input = $('textarea#input').val()
      const timeSlot = $(this).parent().attr("id");
    
      localStorage.setItem(timeSlot, input)
      console.log(input)
     
      console.log('click')
    })
    


}



function updateTimeInputs () { 
  for (var i = 8; i < 20; i++) {
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
  }
}





getTimeSlots();
updateTimeInputs;





