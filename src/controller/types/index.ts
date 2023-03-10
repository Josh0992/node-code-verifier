/**
 * Basic Json Response Controller
 */

export type BasicResponse = {
    message: string
}

/**
 * MessageDateResponse json response controller
 */
export type messageDateResponse = {
    message: string,
    date: Date
}

/**
 * Error Json Response Controller
 */
export type ErrorResponse = {
    error: string,
    message: string
}

//tipos que se pueden modificar no se parecen a la interfaces
//ejemplo dinero tipo string y aca se deblara como tipo flotante
//es como generar nuestro propios tipos de datos personalizados.