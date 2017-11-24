<?php
// WP REST APIを利用するリクエストでのみ発火するフック
add_action('rest_api_init', function() {
  // rest_pre_serve_requestフィルターから
  // 元々設定されている関数rest_send_cors_headersを解除
  remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
  // rest_pre_serve_requestフィルターに新しく関数を設定
  add_filter('rest_pre_serve_request', function($value) {
    // リクエスト元のオリジンを取得
    $origin = get_http_origin();
    // 認可ドメイン一覧の中にリクエスト元のオリジンが存在する場合
    if ($origin && in_array($origin, [
      // 認可ドメインのリスト
      // $originは末尾の/が無いことに注意
    ])) {
      // リクエスト元のオリジンをAccess-Control-Allow-Originに設定
      header('Access-Control-Allow-Origin: ' . esc_url_raw($origin));
      header('Access-Control-Allow-Methods: GET, OPTIONS');
      header('Access-Control-Allow-Credentials: true');
    }
    return $value;
  });
}, 15);