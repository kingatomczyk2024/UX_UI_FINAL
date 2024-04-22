// couldnt make work, found on stackovrflow
function scrollToAnchor(aid) {
  var aTag = $("a[name='" + aid + "']")
  $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow')
}

$('#LearnMore').click(function () {
  scrollToAnchor('app')
})
