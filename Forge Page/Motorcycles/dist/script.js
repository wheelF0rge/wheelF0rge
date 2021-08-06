$(document).ready(function(){
    
function initMoto(){
    $target=$('[data-object="motorcycle-object"]')
    $(document).on('click','[data-behavior="build-motorcycle"]:not(.is-active)', function(){
      $(this).addClass('is-active');
      $(this).find('[data-object="label"]').html('Unbuild <span class="h-mobile">Motorcycle</span>');
      $target.addClass('is-built');
      $('[data-object="start-button"]').prop("disabled", false);
    });
    $(document).on('click','[data-behavior="build-motorcycle"].is-active', function(){
      $(this).removeClass('is-active');
      $(this).find('[data-object="label"]').html('Build <span class="h-mobile">Motorcycle</span>');
      $target.removeClass('is-built is-started is-throttled');
      $('[data-object="start-button"]').removeClass('is-active').prop("disabled", true);
      $('[data-object="start-button"]').find('[data-object="label"]').html('Start <span class="h-mobile">Engine</span>');
      $('[data-object="twist-button"]').removeClass('is-active').prop("disabled", true);
      $('[data-object="twist-button"]').find('[data-object="label"]').html('Twist Throttle');
    });
    
    $(document).on('click','[data-behavior="start-engine"]:not(.is-active)', function(){
      $(this).addClass('is-active');
      $(this).find('[data-object="label"]').html('Stop <span class="h-mobile">Engine</span>');
      $target.addClass('is-started');
      $('[data-object="twist-button"]').prop("disabled", false);
    });
    $(document).on('click','[data-behavior="start-engine"].is-active', function(){
      $(this).removeClass('is-active');
      $(this).find('[data-object="label"]').html('Start <span class="h-mobile">Engine</span>');
      $target.removeClass('is-started is-throttled');
      $('[data-object="twist-button"]').removeClass('is-active').prop("disabled", true);
      $('[data-object="twist-button"]').find('[data-object="label"]').html('Twist Throttle');
    });
    
    $(document).on('click','[data-behavior="twist-throttle"]:not(.is-active)', function(){
      $(this).addClass('is-active');
      $(this).find('[data-object="label"]').html('Untwist Throttle');
      $target.addClass('is-throttled');
    });
    $(document).on('click','[data-behavior="twist-throttle"].is-active', function(){
      $(this).removeClass('is-active');
      $(this).find('[data-object="label"]').html('Twist Throttle');
      $target.removeClass('is-throttled');
    });
    
    $(document).on('mouseenter','[data-object="part-row"]', function(){
      $targetId = $(this).data("row-id");
      $('[data-part-id="'+$targetId+'"]').addClass('is-highlighted');
    });
    $(document).on('mouseleave','[data-object="part-row"]', function(){
      $targetId = $(this).data("row-id");
      $('[data-part-id="'+$targetId+'"]').removeClass('is-highlighted');
    });
  }
  
  
  $( document ).ready(function() {
    initMoto();
  });

});