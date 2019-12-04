export function getRedirectPath({type,avatar}){
    // 根据不同的职位来跳转不同的页面
    // console.log(`type======>${type}`)
    let url = (type === 'boss') ? '/boss':'/applicants'
    // 根据头像来判读是否要完善信息
    if(!avatar){
        url+='info'
    }
    return url
}

// 获取chatId
export function getChatId(userId,targetId){
    return [userId,targetId].sort().join("_")
}