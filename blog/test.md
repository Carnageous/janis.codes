---
title: Creating a mobile App with Ionic 4 and Vue
description: >-
  In this post I will show you how I built an app using Ionic 4, Vue and
  Firebase
image: /../../vue-ionic.jpg
date: 2019-07-18T11:01:40.191Z
categories:
  - Test
---
Bad thing is... this is only a test to build my website. You get a little picture anyways:

![Overfiew of the Festivalfinder Menu](/../../festivalfinder.png "Festivalfinder App screenshot")

And, because I like you, some code.

``` ts
import { Band } from "./types";

export class Musixmatch {
  public static apiKey: string = "<API KEY>";
  // Needed to bypass the CORS policy which is not set properly in the musixmatch api...
  public static cors: string = "https://cors-anywhere.herokuapp.com/";

  public static async getChartArtists(
    pageSize: number,
    pageNumber: number
  ): Promise<Band[]> {
    let bands: Band[] = [];

    const res = await fetch(
      this.cors +
        "https://api.musixmatch.com/ws/1.1/chart.artists.get?format=json&page_size=" +
        pageSize +
        "&page=" +
        pageNumber +
        " &apikey=" +
        this.apiKey,
      {
        mode: "cors",
        headers: {
          "content-type": "application/json"
        }
      }
    );

    if (res.ok) {
      const data = await res.json();

      bands = data.message.body.artist_list.map((i: any) => {
        return { name: i.artist.artist_name, id: i.artist.artist_id } as Band;
      });

      return bands;
    } else {
      return Promise.reject(new Error("Could not fetch bands"));
    }
  }
}
```

::: warning
This is a warning
:::
