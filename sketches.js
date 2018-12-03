$(document).ready(function() {
  $("li").click(function() {
    var checked = $(this).find('[type=checkbox]').prop("checked");
    $(this).find('[type=checkbox]').prop('checked', !checked);
  });
  $(document).tooltip({
    show: {
      effect: "slideDown",
      delay: 150
    }
  });
  $('h3').click(function(){
    $(this).nextUntil("h3").stop(true, true).slideToggle();
  })
  $('h3').each(function () {
    $(this).nextUntil("h3").hide();
  });
});

console.log("I'm alive!");

$(':checkbox').each(function () {
  self.on( "click", notify() );
});

function notify() {
  alert( "clicked" );
}

$("#algo-aconteceu-").click(function(){
  alert("a")
});

$("input:checkbox").first().click(function(){
  alert("a")
});

$('input[type=checkbox]').trigger('click');
//or
$('input[type=checkbox]').click();

$(document).ready(function() {
  $("li").click(function() {
    var checked = $(this).find('[type=checkbox]').prop("checked");
    $(this).find('[type=checkbox]').prop('checked', !checked);
  });
});


$(document).ready(function() {
  $("ul").click(function() {
    alert("a");
  });
});

$(':checkbox').removeAttr("disabled");
$(':checkbox').attr("novalidate","novalidate");

$(document).ready(function() {
  $("input").click(function() {
    alert("b");
  });
});


$(':checkbox').each(function () { this.checked = !this.checked; });

var border = document.getElementsByTagName("input");
for(i=0;i < border.length; i++)
{
  border[i].addEventListener("click", function() {
    if (this.checked) {
      this.parentElement.style.border = "thick solid #0000FF";
    } else {
      this.parentElement.style.border = "none";
    }
  });
}

$("#algo-aconteceu-").on( "click", notify());
$(':checkbox').first().mousedown(function() {
  console.log("yo")
});


$( document).tooltip({
  show: null,
  position: {
    my: "left top",
    at: "left bottom"
  },
  open: function( event, ui ) {
    ui.tooltip.animate({ top: ui.tooltip.position().top + 10 }, "fast" );
  }
});
