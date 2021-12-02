import React from "react";
import { AxisOptions, Chart } from "react-charts";

export default function Line() {
    type DailyStars = {
        date: Date,
        stars: number,
      }
      
      type Series = {
        label: string,
        data: DailyStars[]
      }
      
      const data: Series[] = [
        {
          label: 'React Charts',
          data: [
            {
              date: new Date(),
              stars: 202123,
            }
            // ...
          ]
        },
        {
          label: 'React Query',
          data: [
            {
              date: new Date(),
              stars: 10234230,
            }
            // ...
          ]
        }
      ]
    const primaryAxis = React.useMemo<
      AxisOptions<typeof data[number]["data"][number]>
    >(
      () => ({
        getValue: (datum) => datum.date as unknown as Date,
      }),
      []
    );
  
    const secondaryAxes = React.useMemo<
      AxisOptions<typeof data[number]["data"][number]>[]
    >(
      () => [
        {
          getValue: (datum) => datum.stars,
        },
      ],
      []
    );
  
    return (
      <>
        <br />
        <br />
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
            }}
          />
      </>
    );
  }