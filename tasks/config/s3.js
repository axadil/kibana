module.exports = function (config) {
  return {
    release: {
      bucket: 'tex-artifacts',
      access: 'private',
      //debug: true, // uncommment to prevent actual upload
      upload: [
        {
          src: 'target/<%= pkg.name %>-<%= pkg.version %>-linux-x64.tar.gz',
          dest: 'kibana4/<%= pkg.name %>-<%= pkg.version %>-linux-x64.tar.gz',
        },
        {
          src: 'target/<%= pkg.name %>-<%= pkg.version %>-darwin-x64.tar.gz',
          dest: 'kibana4/<%= pkg.name %>-<%= pkg.version %>-darwin-x64.tar.gz',
        }
      ]
    }
  };
};