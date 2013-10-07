module.exports = function(match) {
  match('',                   		'home#index');
  match('repos',              		'repos#index');
  match('repos/:owner/:name', 		'repos#show');
  match('users',       				'users#index');
  match('users/:login',       		'users#show');
  match('users_lazy/:login',  		'users#show_lazy');
  match('categories?:params',  		'categories#index');
  match('categories/:id?:params',	'categories#show');
  match('items?:params',			'items#index');
  match('items/:id',				'items#show');
};
