$('./body') {

	#Adding Uranium togler menu
	  $(".//div[@id='header']"){
		$("./div[@id='access']"){
			#log("!!!! accesing menu items")
			attribute("data-ur-set", "tabs")
			

			#removing extra skip link
			$("./div[@class='skip-link']"){
				remove()
			}
			
			#scopping into the main menus
			$(".//ul[@id='menu-main-menu']/li[contains(@class, 'menu-item')]"){

				%ind = index()
				log("!!!! made it to the li menu with index: " + %ind)
				
				#The Home menu item does not have content, Uranium breaks if I don't
				match_not(%ind, "1") {
					attributes(data-ur-tabs-component: "button", data-ur-tab-id: %ind)
				}
				

				$(".//ul[contains(@class, 'sub-menu')]"){
					attributes(data-ur-tabs-component: "content",
						data-ur-tab-id: %ind)
				}
          	}     
		}
	}		
}



