namespace widget {
	dictionary Window {
		long id;
	};
	dictionary Tab {
		DOMString title;
 		DOMString url;
 		boolean isSelected;
 	};

	callback WindowCallback = void (Window[] windows);
	callback TabsForWindowCallback = void (Tab[] tabs);

	interface Functions {
		static void getWindows(WindowCallback callback);
		static void getTabsForWindow(Window window, TabsForWindowCallback callback);
	};
};