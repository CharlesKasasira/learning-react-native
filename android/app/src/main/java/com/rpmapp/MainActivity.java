package com.rpmapp;

import com.facebook.react.ReactActivity;

/**
* Imports below are added
* @by Charles Kasasira
 */

import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "rpmapp";
  }

  /**
  * Configuration added by
  * charles
  * @date 2022-02-24
  * @time 11:25:00
   */

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
