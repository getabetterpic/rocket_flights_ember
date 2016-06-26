import EmberUploader from 'ember-uploader';
import ENV from 'rocket-flights-ember/config/environment';

export default EmberUploader.FileField.extend({
  filesDidChange(files) {
    const uploader = EmberUploader.Uploader.create({
      url: `${ENV.HOST}${this.get('url')}`
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0], { rocket: { id: this.get('rocket.id') } });
    }
  }
});
