# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

  #removing wordpress javascript
  remove_desktop_js()

  #removing css from project
  remove_all_styles()

  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts

  

  #temporary removing the main content this needs to be re organized
  $(".//div[@id='main']"){
  	remove()
  }

  #temporary removing the footer content this needs to be re organized
  $(".//div[@id='main']"){
  	remove()
  }
}

