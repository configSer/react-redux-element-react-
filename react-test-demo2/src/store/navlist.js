const obj = {
  name: '',left:"",
  right:"",
  icon1:"icon-shouye",icon2:"icon-xiangqu",icon3:"icon-shanchu",icon4:"icon-geren" ,
  color1:"",color2:'',color3:'',color4:""
};
const FIRST_COUNT = "首页";
const SECOND_COUNT = "其次";
const THIRD_COUNT = "再次";
const FOURTH_COUNT = "最后";

export function headding ( state = obj , action ) {
  switch ( action.type ) {
    case FIRST_COUNT:
      return { ...obj, name: "首页" ,icon1:"icon-shouyefill" ,color1:"#00D1AB"};
    case SECOND_COUNT :
      return { ...obj, name: '其次' , icon2:"icon-xiangqufill", color2:"#00D1AB"};
    case THIRD_COUNT:
      return { ...obj, name: "再次" , icon3: "icon-shanchutianchong" ,color3:"#00D1AB"};
    case FOURTH_COUNT :
      return { ...obj, name: '最后' , icon4: "icon-gerenfill" ,color4:"#00D1AB"};
    default:
      return state;
  }
}

export function firstCount () {
  return { type: FIRST_COUNT }
}

export function secondCount () {
  return { type: SECOND_COUNT }
}

export function thirdCount () {
  return { type: THIRD_COUNT }
}

export function fourthCount () {
  return { type: FOURTH_COUNT }
}