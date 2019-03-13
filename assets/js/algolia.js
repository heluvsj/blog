const script = $('script[src*=algolia]');
const appId = script.attr('id'); 
const indexName = script.attr('name');
const apiKey = script.attr('key');

const search = instantsearch({
  appId: appId,
  indexName: indexName,
  apiKey: apiKey
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-searchbar',
    placeholder: 'Search into posts...',
    poweredBy: true
  })
);
search.addWidget(
  instantsearch.widgets.hits({
    container: '#search-hits',
    templates: {
      item: function(hit) {
        return `
          <div class="post-item">
            <span class="post-meta">${moment.unix(hit.date).format('D MMM YYYY')}</span>
            <h2><a class="post-link" href="{{ site.baseurl }}${hit.url}">${hit.title}</a></h2>
            <div class="post-snippet">${hit.html}</div>
          </div>
        `;
      }
    }
  })
);

search.start();
