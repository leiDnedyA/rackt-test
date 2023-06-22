#lang racketscript/base

(require rackt)

(define (change-video-speed video delta)
    (define currSpeed #js.video.playbackRate)
    ($/:= #js.video.playbackRate (+ currSpeed delta)))

(define (gif-controller props ..)
    (define-values (playback-speed set-playbacracketscriptk-speed) (use-state 1))
    (define video-ref (use-ref))
    (use-effect (lambda (_) 
        (#js.video-ref.current.play)
        ($/:= #js.video-ref.current.loop #true)
        (lambda (_) 0) ; react yells at you if useEffect returns anything but a function
        ))
    (<el "div"
        #:props ($/obj [className "gifController"])
        (<el "video" 
        #:props ($/obj  [src ($ props 'src)]
                        [ref video-ref]
                        [className "mainVideo"]
                        [muted "muted"]))
        (<el "button" "-" 
                #:props 
                    ($/obj  [onClick (lambda (_) (change-video-speed #js.video-ref.current -0.25))]
                            [className "minusButton"]))
            (<el "button" "+" 
                #:props
                    ($/obj  [onClick (lambda (_) (change-video-speed #js.video-ref.current .25))]
                            [className "plusButton"]))))

(provide gif-controller)