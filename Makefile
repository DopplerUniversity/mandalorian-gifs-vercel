create-doppler-project:
	@echo '[info]: Creating "mandalorion-gifs" project'
	@doppler projects create mandalorion-gifs
	@doppler setup --no-prompt
	@echo '[info]: Uploading default secrets'
	@doppler secrets upload --project mandalorion-gifs --config dev sample.env
	@doppler secrets upload --project mandalorion-gifs --config stg sample.env
	@doppler secrets upload --project mandalorion-gifs --config prd sample.env
	@echo '[info]: Setting GIPHY API KEY'
	@doppler secrets set --project mandalorion-gifs --config prd GIPHY_API_KEY="$(GIPHY_API_KEY)"
	@doppler secrets set --project mandalorion-gifs --config stg GIPHY_API_KEY="$(GIPHY_API_KEY)"
	@doppler secrets set --project mandalorion-gifs --config dev GIPHY_API_KEY="$(GIPHY_API_KEY)"
	@echo '[info]: Opening the Doppler dashboard'
	@doppler open
