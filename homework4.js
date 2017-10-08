const result= function(val){
    const stars= function(str,val){
        if(val===0)
          return "";
          return str + stars(str,val-1);
    };
          const loop= function(intnum,intsp){
              if(intnum<=0)
              return "";
              return stars(" ",intsp) + stars("*",intnum) + "\n" + loop(intnum-2,intsp+1);
          };
          return loop(2*val-1,0);
        };
        console.log(result(5));//triangleStars






const pow= function(base,n){
    if(n===0)
    return 1;
    return base * pow(base,n-1);
};
console.log(pow(2,3));





const reverse= function(word){ //abcd
    const loop= function(word,indx){
if(indx<0)
return "";

return word[indx] + loop(word,indx-1); //d + c + b + a
    };
    return loop(word,word.length-1);
};
console.log(reverse("abcd"));//reverse string











const checkerboard= function(val){
    const size= function(str,width){
        if(width===0)
        return "";
        return str + size(str,width-1);
    };
    const loop = function(height){
        if(height===val) {
            return "";
        }
        if(height%2===0){
            return size(" *",val) + "\n" + loop(height+1);
        }
        return size("* ",val) + "\n" + loop(height+1);
    };
    return loop(0)
}
console.log(checkerboard(5));

