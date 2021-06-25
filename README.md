<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/brennanbrown/classic-spirits">
    <img src="https://i.postimg.cc/FzT67X95/android-chrome-512x512.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Classic Spirits Theme for Jekyll</h3>

  <p align="center">
    A classic sidebar Jekyll theme for old-school blogging, created with the Bulma framework. Built on Soot Spirits by Abhishek Nagekar.
    <br />
    <a href="https://github.com/brennanbrown/classic-spirits"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <strong><a href="https://classic-spirits.netlify.app">View Demo</a></strong>
    ·
    <a href="https://github.com/brennanbrown/classic-spirits/issues">Report Bug</a>
    ·
    <a href="https://github.com/brennanbrown/classic-spirits/issues">Request Feature</a>
  </p>
</p>

<!-- BADGES -->
<p align="center">
<a href="https://app.netlify.com/sites/classic-spirits/deploys"><img src="https://api.netlify.com/api/v1/badges/2a8f461d-365e-4918-8bfb-43d1c59e0b03/deploy-status" alt="Netlify Status"></a>
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/brennanbrown/classic-spirits">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/brennanbrown/classic-spirits">
<a href="https://github.com/brennanbrown/classic-spirits/search?l=html"><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/brennanbrown/classic-spirits"></a>
<a href="https://github.com/brennanbrown/classic-spirits/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/brennanbrown/classic-spirits"></a>
<a href="https://github.com/brennanbrown/classic-spirits/commits/main"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brennanbrown/classic-spirits"></a>
<a href="https://github.com/brennanbrown/classic-spirits/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/brennanbrown/classic-spirits"></a>
<a href="https://classic-spirits.netlify.app"><img alt="Website" src="https://img.shields.io/website?down_color=red&down_message=Offline%21&label=Status&up_color=darkgreen&up_message=Online%21&url=https%3A%2F%2Fclassic-spirits.netlify.app"></a>
<br />
<a href="https://github.com/brennanbrown?tab=followers"><img alt="GitHub followers" src="https://img.shields.io/github/followers/brennanbrown?label=Follow%20Me%21&style=social"></a>
<a href="https://github.com/brennanbrown/classic-spirits/watchers"><img alt="GitHub watchers" src="https://img.shields.io/github/watchers/brennanbrown/classic-spirits?label=Watch%21&style=social"></a>
<a href="https://github.com/brennanbrown/classic-spirits/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/brennanbrown/classic-spirits?label=Star%21&style=social"> </a>
<a href="https://github.com/brennanbrown/classic-spirits/network/members"><img alt="GitHub forks"src="https://img.shields.io/github/forks/brennanbrown/classic-spirits?label=Fork%21&style=social"></a>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

**Classic Spirits** is a classic sidebar Jekyll theme for old-school blogging, created with the Bulma framework. Original theme [Soot Spirits](https://github.com/abhn/Soot-Spirits) by [Abhishek Nagekar](https://github.com/abhn).

As of June 23rd, 2021, with >70 posts on Classic Spirits, the website scores a perfect 100 in Performance, Accessibility, Best Practices, and SEO on an audit with [**Google Lighthouse**](https://developers.google.com/web/tools/lighthouse).

![Classic-Spirits Screenshot](https://i.postimg.cc/wBzk8bph/cs-screenshot.png)

### Features

- Completely reworked CSS styles to improve website speeds.
- Two-column layout with responsive design, suitable for a wide range of blogging habits.
- Simple integration with the [Jekyll Twitter plug-in](https://github.com/rob-murray/jekyll-twitter-plugin).
- Modular components in the `_includes` folder. (`01_head.html`, `02_header.html`, etc.)
- Auto-generated RSS feed, sitemap, accessibility features, and search-engine optimization.

## Installation

### Prerequisites

Jekyll requires the following:

- Ruby version **2.5.0** or higher
- RubyGems
- GCC and Make

See [Requirements](https://jekyllrb.com/docs/installation/#requirements) for guides and details.

### Instructions

1. Install all [prerequisites](https://jekyllrb.com/docs/installation/).
2. Install the jekyll and bundler [gems](https://jekyllrb.com/docs/ruby-101/#gems).

```
gem install jekyll bundler
```

3. Clone this repository.

```
git clone https://github.com/brennanbrown/classic-spirits.git
```

4. Change into your new directory.

```
cd classic-spirits
```

5. Install gems from the `Gemfile`.

```
bundle install
```

6. Build the site and make it available on a local server.

```
bundle exec jekyll serve
```

7. Browse to [http://localhost:4000](http://localhost:4000)

If you encounter any errors during this process, check that you have installed all the prerequisites in [Requirements](https://jekyllrb.com/docs/installation/#requirements).

If you still have issues, see [Troubleshooting](https://jekyllrb.com/docs/troubleshooting/#configuration-problems).

## Getting Started

Once you have Jekyll up-and-running, there are only a few steps needed to make this theme your own:

1. Fill out the `_BLANK_config.yml` configuration file and replace the current `_config.yml`
2. Remove the `example_posts` folder in `_posts` and start writing your own!
3. Modify or remove the pages in `_pages` to however you see fit.
4. _(Optional)_ Modify or remove this `README.md` with information about your own project or blog.
5. _(Optional)_ Modify the CSS files in the `assets` folder to customize the site.

<!-- ROADMAP -->

## Roadmap

There are several features that I'm still planning to create and integrate, including:

- Clean up and organize the structure of `assets/custom.css` even further.
- Create a [Theme Gem](https://jekyllrb.com/docs/themes/#publishing-your-theme)
- Add easy and automatic buttons to ["Deploy to Netlify"](https://docs.netlify.com/site-deploys/create-deploys/#deploy-to-netlify-button), Heroku, etc.
- Add Travis continious integration checks

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. You can use this project however you see fit without needing to give attribution.

See `LICENSE` for more information.

## Resources

While creating this theme, I came across a lot of helpful and hard-to-find resources. If you'd like to dive deeper into Jekyll, check them out:

- Jumping Into Jekyll: <https://dev.to/brennan/jumping-into-jekyll-4o9h>
- Jekyll Cheatsheet: <https://devhints.io/jekyll>
- Course on Jekyll: <https://learn-the-web.algonquindesign.ca/topics/jekyll/>
- Jekyll for Designers: <http://simpleprimate.com/jekyll-for-designers/index.html>
- Dynamic Copyright on Jekyll: <https://michaelsoolee.com/jekyll-copyright/>
- Creating breadcrumbs in Jekyll: <https://jekyllcodex.org/without-plugin/breadcrumbs/>
- Display all items from ALL collections: <https://stackoverflow.com/questions/31171041/listing-all-collections-in-jekyll>

### Other Resources

- For markdown previews: <https://jaspervdj.be/lorem-markdownum/>
- Case Study on webfont performance: <https://www.keycdn.com/blog/web-font-performance>
- An extensive `.gitignore`: <https://miguelmota.com/bytes/extensive-gitignore/>
- The inspriation for this project: <http://motherfuckingwebsite.com/>

## Credit

- [Bulma CSS](bulma.io/)
