import Speech from 'speak-tts'

const speech = new Speech()
if (speech.hasBrowserSupport()) { // returns a boolean
    console.log("speech synthesis supported")
}

function textToSpeech(text) {
    speech.init(
        {
            'volume': 1,
            'lang': 'en-GB',
            'rate': 1,
            'pitch': 1,
            'voice': 'Google UK English Male',
            'splitSentences': true,
            'listeners': {
                'onvoiceschanged': (voices) => {
                    console.log("Event voiceschanged", voices)
                }
            }
        }
    ).then((data) => {
        speech.speak({
            text,
        }).then(() => {
            console.log("Success !")
        }).catch(e => {
            console.error("An error occurred :", e)
        })
    }).catch(e => {
        console.error("An error occured while initializing : ", e)
    })

}

export default textToSpeech;
