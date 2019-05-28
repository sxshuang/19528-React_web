function list(state = {
    data: [],
    loading: true
}, action) {
    switch (action.type) {
        case "LIST_UPDATA":
            return {
                loading: true,
                // 为了防止网速慢，新数据卡顿，发送请求之前先让它保持当前state的数据
                data: state.data
            }
        case "LIST_UPDATA_SUCC":
            // console.log(action.data)
            return {
                loading: false,
                data: action.data.data
            }
        case 'LIST_UPDATA_ERROR':
            return {
                loading: false,
                data: []
            }
        default:
            return state;
    }
}
export default list;