// A browser fallback must not display, forward, store or log the OAuth query.
history.replaceState(null, "", location.pathname);
