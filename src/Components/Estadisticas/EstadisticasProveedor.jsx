import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";
import  {  useLayoutEffect } from 'react';

const EstadisticasProveedor = () => {
    useLayoutEffect(() => {
    
        let root = am5.Root.new("chartdiv2");
    
        root.setThemes([
            am5themes_Animated.new(root)
          ]);
          
          // Create chart
          let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
              endAngle: 270
            })
          );
          
          // Create series
          let series = chart.series.push(
            am5percent.PieSeries.new(root, {
              valueField: "value",
              categoryField: "category",
              endAngle: 270
            })
          );
          
          series.states.create("hidden", {
            endAngle: -90
          });
          
          // Set data
          series.data.setAll([{
            category: "Grandes",
            value: 501.9
          }, {
            category: "Medianas",
            value: 301.9
          }, {
            category: "Micro-emprendimientos",
            value: 201.1
          },  ]);
          
          series.appear(1000, 100);
    
        // Add legend
        let legend = chart.children.push(am5.Legend.new(root, {}));
        legend.data.setAll(chart.series.values);
    
        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {}));
    
        return () => {
          root.dispose();
        };
      }, []);
    
      return (
        
        <div id="chartdiv2" style={{ width: "100%", height: "500px" }}></div>
      );
}

export default EstadisticasProveedor