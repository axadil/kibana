module.exports = function(config) {
  return {
    dist: {
      bucket: 'tex-artifacts',
      access: 'private',
      // debug: true, // uncommment to prevent actual upload
      upload: [
        {
          src: '<%= tempDir %>/<%= pkg.name %>-latest.zip',
          dest: 'kibana3/<%= pkg.name %>-latest.zip',
        },
        {
          src: '<%= tempDir %>/<%= pkg.name %>-latest.tar.gz',
          dest: 'kibana3/<%= pkg.name %>-latest.tar.gz',
        }
      ]
    },
    release: {
      bucket: 'tex-artifacts',
      access: 'private',
      // debug: true, // uncommment to prevent actual upload
      upload: [
        {
          src: '<%= tempDir %>/<%= pkg.name %>-<%= pkg.version %>.zip',
          dest: 'kibana3/<%= pkg.name %>-<%= pkg.version %>.zip',
        },
        {
          src: '<%= tempDir %>/<%= pkg.name %>-<%= pkg.version %>.tar.gz',
          dest: 'kibana3/<%= pkg.name %>-<%= pkg.version %>.tar.gz',
        }
      ]
    }
  };
};