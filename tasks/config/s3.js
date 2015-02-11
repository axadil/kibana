module.exports = function (config) {
  return {
    release: {
      bucket: 'tex-artifacts',
      access: 'private',
      //debug: true, // uncommment to prevent actual upload
      upload: [
        {
          src: 'target/<%= pkg.name %>-<%= pkg.version %>.zip',
          dest: 'kibana4/<%= pkg.name %>-<%= pkg.version %>.zip',
        },
        {
          src: 'target/<%= pkg.name %>-<%= pkg.version %>.tar.gz',
          dest: 'kibana4/<%= pkg.name %>-<%= pkg.version %>.tar.gz',
        }
      ]
    }
  };
};