export const GET = async () => {
    console.log('debug', new Date(), process.id)
    return Response.json({
        NEXT_PUBLIC_MESSAGE: process.env.NEXT_PUBLIC_MESSAGE,
        pid: process.pid,
    })
}
