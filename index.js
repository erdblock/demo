/* @flow */

var erdblock                            = require("erdblock")()
var express                             = require("express")
var app = express()

app.use("/", erdblock)

erdblock.locals.title                   = "Hello World"
erdblock.locals.subtitle                = "Subtitle"
erdblock.locals.profileImage            = __dirname + "/assets/profile.png"
erdblock.locals.coverImage              = __dirname + "/assets/cover.png"



var e = require("erdblock-stackexchange")()
e.locals.config.user_id.setValue("3507867")
e.locals.config.site.setValue("stackoverflow")
erdblock.addPlugin(e, "1")


var ios = require("erdblock-itunes")()
ios.locals.config.appID.setValue("490217893")
ios.locals.config.descriptionLenght.setValue("30")
erdblock.addPlugin(ios, "2")


var github = require("erdblock-github")()
github.locals.config.username.setValue("janniklorenz")
github.locals.config.reposCount.setValue("3")
erdblock.addPlugin(github, "3", 1000)


var rss = require("erdblock-rss")()
rss.locals.config.title.setValue("Alpha")
rss.locals.config.url.setValue("http://blog.janniklorenz.de/rss/")
rss.locals.config.link.setValue("http://www.example.com/a")
rss.locals.config.articles.setValue("3")
erdblock.addPlugin(rss, "4")


var markdown = require("erdblock-markdown")()
markdown.locals.config.markdown.setValue("#Markdown Erdblock Plugin\n [www.example.org](http://www.example.org/stuff)")
erdblock.addPlugin(markdown, "5")


var website = require("erdblock-website")()
website.locals.config.title.setValue("Example")
website.locals.config.url.setValue("http://www.example.com/")
website.locals.config.description.setValue("Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch ")
erdblock.addPlugin(website, "6")


erdblock.setPriorityForPlugin("3", 1100)
erdblock.removePlugin("6")



app.listen(3000)
