var MonitorDate=[];
var PM25=[];
var NO2=[];
var PM10=[];
var O3=[];
var CO=[];
var SO2=[];

$(document).ready(function(){ //(ready)當文件載入完成時
    var uv_url = "https://opendata.epa.gov.tw/ws/Data/UV/?$format=json";
    var wether_url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=rdec-key-123-45678-011121314";
    var pm25_url = "https://opendata.epa.gov.tw/ws/Data/ATM00625/?$format=json";
    
   // getdata('data_Zhongli.json','container1','中壢區');
    getdata('https://data.tycg.gov.tw/api/v1/rest/datastore/9e5756d8-f481-4ab8-881a-416dd04fa07f?format=json','container1','中壢區');
    getdata('data_Taoyuan.json','container2','桃園區');
    getdata('data_Pingzhen.json','container3','平鎮區');
    getdata('data_Longtan.json','container4','龍潭區');
    getdata('data_Guanyin.json','container5','觀音區');
    getdata('data_Dayuan.json','container6','大園區');
   
});

function getdata(filename,container,sitename)
{
     $.ajax({
        url: filename,
        type: "GET",//請求方式為get
        crossDomain: true,
        dataType: "json", //返回資料格式為json
        success: function(data) {
            //alert("Success");
           
            var date='';
            $.each(data.result.records, function(i, item){
                
                if(i==0)
                    MonitorDate.push(item.MonitorDate);
                else
                {
                    for(var i=0;i<MonitorDate.length;i++)
                    {
                        if(MonitorDate[i]==item.MonitorDate)
                            break;
                        if(i==MonitorDate.length-1 && MonitorDate[i]!=item.MonitorDate)
                            MonitorDate.push(item.MonitorDate);
                    }
                }
                
                if(item.ItemEngName=="PM2.5")
                {
                    if(item.Concentration=='x'){PM25.push(null);}
                    else
                        PM25[MonitorDate.length-1] = parseFloat(item.Concentration);
                }
                    
                if(item.ItemEngName=="NO2")
                {
                    if(item.Concentration=='x'){NO2.push(null);}
                    else
                        NO2[MonitorDate.length-1] = parseFloat(item.Concentration);

                }
                if(item.ItemEngName=="PM10")
                {
                    if(item.Concentration=='x'){PM10.push(null);}
                    else
                        PM10[MonitorDate.length-1] = parseFloat(item.Concentration);
                }
                    
                if(item.ItemEngName=="O3")
                {
                    if(item.Concentration=='x'){O3.push(null);}
                    else
                        O3[MonitorDate.length-1] = parseFloat(item.Concentration);
                }
                    
                if(item.ItemEngName=="CO" )
                {
                    if(item.Concentration=='x'){CO.push(null);}
                    else
                        CO[MonitorDate.length-1] = parseFloat(item.Concentration);
                }
         
                if(item.ItemEngName=="SO2" )
                {
                    if(item.Concentration=='x'){SO2.push(null);}
                    else
                        SO2[MonitorDate.length-1] = parseFloat(item.Concentration);
                }       
            
            })
            PM25.length=NO2.length=PM10.length=O3.length=CO.length=SO2.length=MonitorDate.length;

            //alert(MonitorDate.length+' '+PM25.length+' '+NO2.length+' '+PM10.length+' '+O3.length+' '+CO.length+' '+SO2.length);
			var MonitorDate_tmp =[];
			
			for(var i=0;i< MonitorDate.length;i++){
				MonitorDate_tmp[i]=MonitorDate[i];
			}
			
            //MonitorDate.sort();
			
            /*
			for(var i=0;i<MonitorDate.length;i++)
			{
				for(var j=i;j<MonitorDate.length;j++)
				{
					if(MonitorDate_tmp[i] == MonitorDate[j])
					{
						PM25.swap(i,j);
						NO2.swap(i,j);
						PM10.swap(i,j);
						O3.swap(i,j);
						CO.swap(i,j);
						SO2.swap(i,j);
					}
				}
			}
            */
            
            
            var title = {
                text: sitename  
            };
            var subtitle = {
                text: ''
            };
            var xAxis = {
               categories: MonitorDate
            };
            var yAxis = {
              title: {
                 text: '數值'
              }
            }; 
            var tooltip = {
                  crosshairs:true,
                  shared:true
            };
            
            var legend = {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0
            };
            var series =  [
              {
                 name: 'PM2.5',
                 data: PM25
              }, 
              {
                 name: 'NO2',
                 data: NO2
              }, 
              {
                 name: 'PM10',
                 data: PM10
              }, 
              {
                 name: 'O3',
                 data: O3
              },
              {
                 name: 'CO',
                 data: CO
              },
              {
                 name: 'SO2',
                 data: SO2
              }, 
            ];

            var json = {};

            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.legend = legend;
            json.tooltip=tooltip;
            json.series = series;
            $('#'+container).highcharts(json);
            
            MonitorDate.length=0;
            PM25.length=0;
            NO2.length=0;
            PM10.length=0;
            O3.length=0;
            CO.length=0;
            SO2.length=0;
        },
        error: function() { 
            alert("ERROR!!!");
        }
    });
}

Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}