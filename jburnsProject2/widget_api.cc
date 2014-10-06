// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "extensions/browser/api/widget/widget_api.h"

#include "base/sys_info.h"
#include "chrome/browser/ui/browser.h"
#include "chrome/browser/ui/browser_list.h"
#include "chrome/browser/ui/tabs/tab_strip_model.h"

namespace extensions {

  WidgetGetWindowsFunction::WidgetGetWindowsFunction() {
    int i = 0;
    for(int j = 0; j<10; j++){
      i++;
    }
  }

  WidgetGetWindowsFunction::~WidgetGetWindowsFunction() {
  }

  AsyncExtensionFunction::ResponseAction WidgetGetWindowsFunction::Run() {
    // Dummy dictionary.
    base::DictionaryValue* result = new base::DictionaryValue();
    result->SetInteger("id", 0);

    base::ListValue* browser_list_ret = new base::ListValue();
    browser_list_ret->Append(result);
    return RespondNow(OneArgument(browser_list_ret));
  }

  WidgetGetTabsForWindowFunction::WidgetGetTabsForWindowFunction() {

  }

  WidgetGetTabsForWindowFunction::~WidgetGetTabsForWindowFunction() {
    
  }

  AsyncExtensionFunction::ResponseAction WidgetGetTabsForWindowFunction::Run() {
  //  scoped_ptr<core_api::widget::GetTabsForWindow::Params> params(
  //      core_api::widget::GetTabsForWindow::Params::Create(*args_));
  //  EXTENSION_FUNCTION_VALIDATE(params.get());
  //  const core_api::widget::Window& window = params->window;

    // Dummy dictionary, search for window with |window.id|.
    base::DictionaryValue* result = new base::DictionaryValue();
    result->SetString("title", "");
    result->SetString("url", "");
    result->SetBoolean("isSelected", false);

    base::ListValue* tab_list_ret = new base::ListValue();
    tab_list_ret->Append(result);
    return RespondNow(OneArgument(tab_list_ret));
  }

}  // namespace extensions
