$(document).ready(function() {
  console.log("Ready!!")
  $(function() {

    $.ajax({
        url: 'https://www.codeschool.com/users/Bustakaplan.json',
        dataType: 'jsonp',
        success: function(response) {
          addCourses(response.courses.completed);
        }
    });

  function addCourses(courses) {
    var $badges = $("#badges");
    courses.forEach(function(course){
    // console.log(course);
    var $course = $('<div />', {
      'class': 'course'
      }).appendTo($badges);
console.log($course);
    $('<h3 />', {
      text: course.title
    }).appendTo($course);

    $('<img />', {
      src: course.badge
    }).appendTo($course);

    $('<a />', {
      'class':'btn btn-primary',
      target: '_blank',
      href: course.url,
      text: 'See Course',
    }).appendTo($course);

  })
  }
});
});
