var queryString=
{
		data:{},
		initial:function(){
			var paramGroup;
			var tempGroup;
			var queryStr = new String(window.location.search);
			queryStr = queryStr.substr(1,queryStr.length);//remove "?"
			paramGroup = queryStr.split("&");
			for(var i=0; i<paramGroup.length; i++){
				tempGroup = paramGroup[i].split("=");
				this.data[tempGroup[0]] = tempGroup[1];
			}
		},
		getValue:function(key){
			return this.data[key];
		}
}
