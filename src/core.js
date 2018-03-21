/*!
 * jQuery BackGround Video v1.0.0
 * 
 * Copyright 2015 Seonpil Kim
 * Released under the MIT license
 */
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function(){
      return factory(root, root.document);
    });
  } else if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = root.document ? factory(root, root.document) : function(w){ return factory(w, w.document) }
  } else {
    root.Bgv = factory(root, root.document);
  }
}(typeof window !== "undefined" ? window : this, function(window, document){
    var init = function(){
        var Bgv = function(element){
            this.vc = element;
            this.video = element.find('video');
            this.init();
        };
        $.extend(Bgv.prototype, {
            init: function(){
                this.vc.css({position: 'relative', width: '100%', height: '100%'});
                this.video.css({width: '1920px', height: '1080px'});
                $(window).bind('resize', this.responsive);
                this.responsive();
            },
            responsive: function(){
                let scale = [this.vc.width(), this.vc.height(), this.vc.find('video').width(), this.vc.find('video').height()];
                
                // 비디오 너비가 영역 너비보다 크면 비디오 오리지널 크기를 유지하며 수평 중앙에 위치시킴.
                if(scale[2] > scale[0]) this.vc.find('video').css({marginLeft: - (scale[2] - scale[0])/2 + 'px', width: scale[2] + 'px', height: scale[3] + 'px'});
            
                // 비디오 높이가 영역 높이보다 크면 비디오 오리지널 크기를 유지하며 수직 중앙에 위치시킴.
                if(scale[3] > scale[1]) this.vc.find('video').css({marginTop: - (scale[3] - scale[1])/2 + 'px', width: scale[2] + 'px', height: scale[3] + 'px'});
                
                // 비디오 너비가 영역 너비보다 작거나 같을때 또는 비디오 높이가 영역 높이보다 작거나 같을때.
                if(scale[2] <= scale[0] || scale[3] <= scale[1]){
                    // 비디오 비율을 유지하며 영역안에 비디오를 꽉 채움 (비율유지로 인해 영역을 벗어나는 부분은 버림
                    if(scale[0] >= scale[1]){
                        if(scale[0]/16*9 < scale[1]) this.vc.find('video').css({marginTop: 0, width: scale[0] / 9*16 + 'px', height: scale[1] + 'px'});
                        else this.vc.find('video').css({marginLeft: 0, width: scale[0] + 'px', height: scale[0] / 16*9 + 'px'});
                    } else {
                        if(scale[1] / 9*16 < scale[0]) this.vc.find('video').css({marginLeft: 0, width: scale[0] + 'px', height: scale[0] / 16*9 + 'px'}); 
                        else this.vc.find('video').css({marginTop: 0, width: scale[1] / 9*16 + 'px', height: scale[1] + 'px'});
                    }
                }
            }        
        });
        return Bgv;
    };
    return init();
}));
