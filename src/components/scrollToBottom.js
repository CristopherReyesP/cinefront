import { animateScroll } from 'react-scroll';

export const scrollToBottomAnimated = ( id ) => {
    animateScroll.scrollToBottom('scrollAnimated',{
        containerId: id,
        duration: 350
    });
}