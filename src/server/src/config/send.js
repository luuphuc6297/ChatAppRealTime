const send = {
    success: (res, message, data) =>{
        res.status(201).json({
            status: true,
            message,
            data
        });
    },

    fail: (res, message) => {
        res.status(422).json({
            status: false,
            message
        });
    },
    
    error: (res, message) => {
        res.status(500).json({
            status: false,
            message
        });
    }
}

// const successObj = (result) => {
// 	return {
// 		'status':1,
// 		'result': result,
// 	}
// }

// const exceptionObj = (message, errorCode = 404) => {
// 	return {
// 		'status':0,
// 		'error': {
// 			'code': errorCode,
// 			'message': message,
// 		},
// 	}
// }

// const ResponseExpress = {
//     successful: (res, result) => {
//         res.json(successObj(result));
//     },

//     exception: (res, message, errorCode) => {
//         res.json(exceptionObj(message, errorCode));
//     }
// }
module.exports = send;