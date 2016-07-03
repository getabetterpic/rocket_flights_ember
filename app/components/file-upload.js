import EmberUploader from 'ember-uploader';
import ENV from 'rocket-flights-ember/config/environment';
import Ember from 'ember';

export default EmberUploader.FileField.extend({
  session: Ember.inject.service(),

  filesDidChange(files) {
    let uploader;
    this.get('session').authorize('authorizer:auth0', (headerName, headerValue) => {
      let headers = {};
      headers[headerName] = headerValue;
      uploader = EmberUploader.Uploader.create({
        url: `${ENV.HOST}${this.get('url')}`,
        ajaxSettings: {
          headers: headers
        }
      });
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0], { rocket_id: this.get('rocket.id') }).then((image) => {
        Ember.$('#upload-modal').closeModal();
        this.addImageToStore(image);
      });
    }
  }
});
