- 비디오가 특정 영역의 백그라운드로 무한루프 되어 보여지게 하기
- 특정 영역이 풀브라우징 처리가 되고 있는 영역이든 레이아웃상의 일부만 점유하는 영역이든 그 영역의 내부에서 항상 꽉차게 보여지도록 하는 방식이다.
- 비디오 크기가 영역보다 작으면 강제로 늘려 보여주고, 비디오 크기가 영역보다 크면 영역의 중앙을 기준으로 최적화 된 스케일로 보여준다.
- (단순한 snippet 수준의 개인용도 코드이지만, 필요하면 플러그인으로 확장을...?)

# Usage

```html Markup
<div id="video-container">
    <video autoplay loop poster="{{url}}">
        <source src="{{video-url}}" type="video/mp4">
        <source src="{{video-url}}" type="video/webm">
    </video>
</div>
```

```js
import $ from 'jquery';
import Bgv from 'bgv';

var element = $('#video-container');
Bgv(element);
```
