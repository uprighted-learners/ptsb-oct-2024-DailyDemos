import validateSession from "../middlware/validateSession"

// router setup

router.post('/new-message', validationSession, async(req, res)=>{
    try {
        //get the body content

        const content = req.body.content;
        // get id from the user
        const user = req.user._id;

        const newMessage = new MessageChannel({ content, owner: user})

        newMessage.save()

        res.status(200).json({
            newMessage,
            message: "success"
        })

    } catch (error){
        res.status(500)
    }

} )